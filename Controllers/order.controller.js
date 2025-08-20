const order=require('../Models/order')
const {postData,getData}=require('../Views/reuse')


const postOrder=postData(order)
const getOrder=getData(order)


module.exports={postOrder,getOrder}