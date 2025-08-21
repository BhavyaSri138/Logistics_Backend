const order=require('../Models/order')

const {postData,getData,patchData}=require('../Views/reuse')


const postOrder=postData(order)
const getOrder=getData(order)
const patchOrder=patchData(order)

module.exports={postOrder,getOrder,patchOrder}