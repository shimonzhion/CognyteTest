const data = require('./db.json')

async function getPot() {
    console.log("getting a pot");
    return "pot";
  }
  
  async function getPan() {
    console.log("getting a pan");
    return "pan";
  }
  
  async function getPlate() {
    console.log("getting a plate");
    return "plate";
  }
  
  async function boilWaterInPot(pot) {
    console.log(`start boiling water in the ${pot}`);
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(`water in the ${pot} are boiling`), 10000)
    );
    console.log(result);
    
  }
  
  async function cookPasta(pot, pastaType) {
    console.log(`start cooking ${pastaType} in the ${pot}`);
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(`${pastaType} is ready`), 10000)
    );
    console.log(result);
  }
  
  async function cookSauce(pan, sauceType) {
    console.log(`start preparing ${sauceType} sauce in the ${pan}`);
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(`${sauceType} sauce is ready`), 10000)
    );
    console.log(result);
  }
  
 
  async function mixPastaWithSauce(pasta, sauce) {
    console.log(`start mixing ${pasta} with ${sauce}`);
    const result = await new Promise((resolve) =>
      setTimeout(() => resolve(`${pasta} with ${sauce} is ready`), 5000)
    );
    console.log(result);
    return result;
  }
   
  async function preparePastaPlate(plate, pastaDish) {
    console.log(`placing ${pastaDish} on the ${plate}`);
    const result =   await new Promise((resolve)=>{
        setTimeout(()=>{
          resolve(`${pastaDish} and is served on the ${plate}`)
        },4000)
    })
    console.log(result);
  }

  async function serve(pastaDish) {
    const result = await new Promise((resolve) => {
      setTimeout(() => {
          resolve(`preparing ${pastaDish} for serve`);
      }, 3000);
  });
  console.log(result);
  }

  async function cookPastaDish(pastaType, sauceType) {
    
    const startTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log('start time -', startTime)
    const pot = await getPot();
    const pan = await getPan();
    const plate = await getPlate();
    
    await boilWaterInPot(pot);  
  
    await Promise.all([cookPasta(pot, pastaType), cookSauce(pan, sauceType)]);
  
    const pastaDish = await mixPastaWithSauce(pastaType, sauceType);
    await serve(pastaDish);
  
    await preparePastaPlate(plate, pastaDish);
    const endTime = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
    console.log('end time -', endTime)
    return `bon appétit`
     
  }
  
  async function servePastaToDiners(data) {
    const tables = data.tables
    for (const table of tables) {
      console.log(`table: ${table.table_id}`);
    const diners = table.diners
      for (const order of diners) {
        console.log(`diner_id: ${order.diner_id}  name: ${order.name}`);
  
        const result = await cookPastaDish(order.pastaType, order.sauceType);
        console.log(result,  order.name);
      }
    }
  }
  
  servePastaToDiners(data);
  


