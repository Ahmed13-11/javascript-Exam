
// // // // // Es6 2015 
// // // // // let - const - var


// // // // // let x=6;
// // // // // x=7;
// // // // // console.log(x)
// // // // // scope 
// // // // // function test(){
// // // // // var x =9;

// // // // // }

// // // // // console.log(x)

// // // // {
// // // // //block scope 
// // // // }

// // // // // if(true){
// // // // // let age =3;
// // // // // }

// // // // // for(let i=0;i<10;i++){
// // // // // let z ='ahjkl';
// // // // // }

// // // // // console.log(age)

// // // // // declaration
// // // // // let prices=10;
// // // // //  prices=6;
// // // // // console.log(prices)

// // // // // console.log(x)
// // // // // let x =9;

// // // // // const prices=66;
// // // // // prices=8;

// // // // // console.log(prices)

// // // // // template litral 

// // // // // let age =5;
// // // // // let z=6
// // // // // console.log(z+age+'development')
// // // // // let age=8;
// // // // // let x=7;
// // // // // // `${}`
// // // // // console.log(`${age}${x}web design and`)

// // // // // defualt paramter

// // // // // function test(x=0,y=0){
// // // // // // if(x === undefined){
// // // // // // x=0;
// // // // // // }
// // // // // // if(y === undefined)
// // // // // // {
// // // // // // y=0;
// // // // // // }
// // // // // console.log(x,y)
// // // // // }

// // // // // test(4,7)
// // // // // test(4)
// // // // // test()


// // // // // 
// // // // // function test(){}
// // // // // let sayHi =function(){}
// // // // // (d=function(){})

// // // // // arrow function

// // // // // let myFunc =()=>{}
// // // // // myFunc()

// // // // // sugar syntax
// // // // // let myFunc =x=> x+7

// // // // // let x =myFunc(5)
// // // // // console.log(x)


// // // // // //callback
// // // // // f1(()=>{
// // // // // f2()
// // // // // })



// // // // // this keyword  object 
// // // // // console.log(this)


// // // // // function test(){
// // // // // console.log(this)
// // // // // }

// // // // // let h2s = document.querySelectorAll('h2')
// // // // // for(let i=0;i<h2s.length;i++){
// // // // // h2s[i].addEventListener('click',function(e){
// // // // // // console.log(e.target)//
// // // // // console.log(this)
// // // // // })
// // // // // }




// // // // let user={
// // // // useName:'shimaa',
// // // // gender:'female',
// // // // age:40,
// // // // welcome:function(){
// // // // // console.log(this)
// // // // let that = this
// // // // //  let innerFunc=function(){
// // // // //  console.log(that)
// // // // //  }
// // // // let innerFunc=()=>{
// // // // console.log(this)
// // // // }
// // // //  innerFunc()
// // // // },
// // // // sayHi:()=>{
// // // // console.log(this)
// // // // }

// // // // }
// // // // user.sayHi()


// // // //map - filter - reduce - forEach

// // // // for(let i=0;i<prices.length;i++){
// // // // console.log(prices[i])
// // // // }

// // // // prices.forEach((price,i)=>{console.log(price,i)})

// // // // let h2s = document.querySelectorAll('h2')

// // // // h2s.forEach((h2,i)=>{
// // // // h2.addEventListener('click',function(){
// // // // alert(i)
// // // // })
// // // // });

// // // // map
// // // // for(let i=0;i<prices.length;i++){
// // // // console.log(prices[i] * 0.5)
// // // // }

// // // // let newArr =prices.map((price)=>{
// // // // return price * 0.5
// // // // })

// // // // console.log(newArr)

// // // // let arr=[
// // // // {
// // // // userName:'ali',
// // // // age:30
// // // // },
// // // // {
// // // // userName:'shimaa',
// // // // age:30
// // // // },
// // // // {
// // // // userName:'hend',
// // // // age:30
// // // // },
// // // // ]
// // // // let x =arr.map((item)=>{
// // // // return`hi ${item.userName}`
// // // // })
// // // // console.log(x)

// // // // let prices =[100,200,300,400,500,600];

// // // // let newArr =prices.filter((price)=>{
// // // // return price> 300
// // // // })

// // // // console.log(newArr)

// // // // reduce
// // // // let prices =[100,200,300,400,500,600];

// // // // let result =prices.reduce((prev,current)=>{return prev + current},10)
// // // // console.log(result)

// // // let user ={
// // // pname:'shimaa',
// // // age:50,
// // // gender:'female',
// // // address:{city:'alex',street:'uio'}
// // // }
// // // // console.log(user.pname)
// // // // destructing
// // // let {pname,age,gender}=user
// // // let{city,street}=user.address

// // // // console.log(city)
// // // // console.log(street)
// // // // console.log(gender)


// // // let arr=[2,3,4];
// // // let [x]=arr
// // // console.log(x)


// // // spread operator - shallowcopy-deepcopy

// // // let arr =[2,3,4,5]

// // // function test(x,y,z){
// // // console.log(x,y,z)
// // // }

// // // test(...arr)

// // // let arr1=[200,300,400]
// // // // shallow copy
// // // // let arr2 = arr1;
// // // // deep copy
// // // // let arr2 = [...arr1]
// // // arr2.push(900)
// // // console.log(arr1)
// // // console.log(arr2)


// // // let person1={
// // // useName:'ali',
// // // age:30
// // // }

// // // // let person2=person1;
// // // let person2 ={...person1}
// // // person2.gender='male'
// // // console.log(person1)
// // // console.log(person2)

// // // Reset paramter
// // function test(...x){
// // // let temp=0;
// // // for(let i=0 ;i<x.length;i++){
// // // temp += x[i]
// // // }
// // // console.log(temp)

// // let result =x.reduce((prev,current)=>{return prev +current})
// // console.log(result);
// // }

// // test(3,4,5,6)
// // test(4,5)
// // test(4,8,9)


// // strict mode

// // x =10;
// // console.log(x)

// let arguments = 30;
// console.log(arguments)

// function test(){
//     "use strict"

// }



// Modules
