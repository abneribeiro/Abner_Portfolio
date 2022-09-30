// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const dynamicDate = new Date();

  
  res.json({
     date: dynamicDate.toGMTString()
  })
}
