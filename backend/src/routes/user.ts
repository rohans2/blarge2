import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput } from "@rohansharma18/medium-commons";
import { signinInput } from "@rohansharma18/medium-commons";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();
userRouter.post('/signup', async (c) => {
  try{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    
    const body = await c.req.json();
    const { success } = signupInput.safeParse(body.postInputs);
    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs are incorrect"
      })
    }
    const user = await prisma.user.create({
      data: {
        email: body.postInputs.email,
        password: body.postInputs.password,
        name: body.postInputs.name
      }
    })
    
    const token = await sign({
      id: user.id
    }, c.env.JWT_SECRET)
  
    return c.json({
      jwt: token
    });
  }catch(e: any){
    console.log("error", e.message);
  }  
  
  })
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    const body = await c.req.json();

    const success = signinInput.safeParse(body.postInputs);
    if(!success){
      c.status(403);
      return c.json({
        message: "Inputs are incorrect"
      })
    }
    console.log('body', body);
    const user = await prisma.user.findUnique({
      where: {
        email: body.postInputs.email,
        password: body.postInputs.password
      }
    })
  
    if(!user){
      c.status(403);
      return c.json({error: "user not found"});
    }
  
    const token = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({jwt: token});
  })