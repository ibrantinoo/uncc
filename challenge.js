
//  const myContainer=  Buffer.alloc();

//  myContainer[0]=0x48;
//  myContainer[1]=0x69;
//  myContainer[2]=0x21;

const {constants}= require('buffer');

 const buff=  Buffer.from('Hi!','utf-8');


console.log(buff,'buff',constants);
