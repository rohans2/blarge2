import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog{
    "content": string;
    "title":string;
    "id":string;
    "author": {
        "name": string;
    }
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [failed, setFailed] = useState(false);
    useEffect(() => {
        try{
            axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then(res => {
                if(res.status === 403){
                    setLoading(false);
                    setFailed(true);
                }else{
                    setBlogs(res.data.allPosts);
                    setLoading(false);
                }
                  
            })
            .catch((e) => {
                alert("You are not logged in");
                setFailed(true);
                setLoading(false);
                console.log(e);
            })
        }catch(e){
            alert("You are not logged in");
            setFailed(true);
            setLoading(false);
        }
        
    }, [])

    return {
        loading,
        blogs,
        failed
    }

}

export const useBlog = ({id}: {id: string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const [failed, setFailed] = useState(false);
    
    useEffect(() => {
        try{
            axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: localStorage.getItem("token")
                }
            })
            .then(res => {
                if(res.status === 403){               
                    setLoading(false);
                    setFailed(true);
                    
                }else{
                    setBlog(res.data);
                    setLoading(false);
                }
                  
            }).catch((e) => {
                alert("You are not logged in");
                setFailed(true);
                setLoading(false);
                console.log(e);
            })
        }catch(e){
            alert("You are not logged in");
            setFailed(true);
            setLoading(false);

        }
        
    }, [id])

    return {
        loading,
        blog,
        failed
    }
}