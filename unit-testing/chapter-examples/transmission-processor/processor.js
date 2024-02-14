function processor(transmission) {
    let id, rawData;
    transmission = transmission.trim();
    let arr = transmission.split('');
    let count = 0;
    //console.log("transmission.split['']: ", arr);
    // arr.forEach(element => {
    //     //console.log("Element: ", element);
    //     if(element === ':'){
    //         console.log('one');
    //         count += 1;
    //     }
    // });
    // if(count !== 1){
    //     return -1;
    // }
    if(!transmission.includes('::')){
        return -1;
    }
    else{
        [id, rawData] = transmission.split('::');
        Number.isNaN(Number(id)) ? (id = -1) : (id = Number(id));
        (rawData[0] === '<' && rawData[rawData.length-1] === '>') ? null : rawData = -1 ;
        if(rawData !== -1){
            rawData = rawData.replace('<', '').replace('>', '');
            (Number.isNaN(Number(rawData))) ? rawData = -1 : rawData = Number(rawData);
        }
    }
    return {id , rawData};
 }

 console.log(processor("tyty::<2571547512134>"));
 //console.log("checking if raw data is number", !(Number.isNaN(Number("454751444"))));

 module.exports = processor;