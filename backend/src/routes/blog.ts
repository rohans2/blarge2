import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { createBlogInput, updateBlogInput } from "@rohansharma18/medium-commons";

export const blogRouter = new Hono<{
    Bindings: {
        JWT_SECRET: string,
        DATABASE_URL: string
    },
    Variables: {
        userid: string
    }
}>();

blogRouter.use('/*', async (c,next) => {
    const token = c.req.header("authorization") || "";
    try {
      const res = await verify(token, c.env.JWT_SECRET);
      if(res.id){
        c.set('userid', res.id);
        await next()
      }else{
        c.status(403)
        return c.json({error: "unauthorized"});
      }  
    } catch (error) {
      c.status(403);
      return c.json({
        message: "You are not logged in"
      })
    }
    
  
  })
  
  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
      const allPosts = await prisma.post.findMany({
        select: {
          content: true,
          title: true,
          id: true,
          author: {
            select: {
              name: true
            }
          }
        }
      })
      return c.json({allPosts})
    }catch(e: any){
      console.log("Error fetching records:", e.message);
    }
  })

  blogRouter.get('/:id', async (c) => {
    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    try{
      const postId = c.req.param('id');
      const blog = await prisma.post.findUnique({
        where: {
          id: postId
        },
        select:{
          id: true,
          title: true,
          content: true,
          author: {
            select: {
              name: true
            }
          }
        }
      })
    return c.json(blog)
    }catch(e){
      c.status(411);
      return c.json({
        message: "Error while fetching blog post"
      });
    }
    
  })
  
  blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    console.log("Hey");
  try{
    const userid = c.get('userid');
    const body = await c.req.json();
    console.log("body", body);
    const success = createBlogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs are incorrect"
      })
    }
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: userid
      }
    })
    return c.json({
      id: blog.id 
    });
  }catch(e: any){
    console.log("Error ", e.message);
  }
    
  })
  
  blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const userid = c.get('userid');
    const body = await c.req.json();
    const success = updateBlogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs are incorrect"
      }) 
    }
    await prisma.post.update({
      where: {
        id: body.id,
        authorId: userid
      },
      data: {
        title: body.title,
        content: body.content
      }
    })
    return c.text("post updated successfully");
  })
  