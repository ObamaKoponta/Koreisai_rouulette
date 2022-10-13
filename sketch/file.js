

const showOpenFileDialog = () => {
    return new Promise(resolve => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.csv';
        input.onchange = event => { resolve(event.target.files[0]); };
        input.click();
    });
};


const readAsText = file => {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () => { resolve(reader.result); };
    });
};


function convertCSVtoArray(str,array){ // 読み込んだCSVデータが文字列として渡される
    let tmp = str.split(/\n|\r|,/); // 改行を区切り文字として行を要素とした配列を生成

    for(let i=0;i<tmp.length;++i){
        if(tmp[i] != ""){
            array.push(tmp[i]); // 配列に要素として追加
        }
    }
    
    console.log(array);
}

