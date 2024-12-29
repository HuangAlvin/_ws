import { Application, Router } from "https://deno.land/x/oak/mod.ts";



// 建立一個路由
const router = new Router();

// 自我介紹的 API 路由
router.get("/self-introduction", (context) => {
  const selfIntroduction = {
    name: "黃俊皓",
    age: 21,
    gender: "男",
  };

  context.response.body = selfIntroduction;
});

// 建立一個 Oak 應用程式
const app = new Application();

// 使用路由
app.use(router.routes());
app.use(router.allowedMethods());

// 啟動伺服器
const PORT = 8000;
console.log('start at : http://127.0.0.1:8000')
await app.listen({ port: 8000 })
