//Using a factory
function Phone(brand,model,color,batteryLife,category){
    return {
        brand:brand,
        model:model,
        color:color,
        batteryLife:batteryLife,
        category:category
    };
    }
 let tecno=Phone('tecno',"pop2","black","24hrs","smart")
 let nokia=Phone('nokia','ka torch','white','4 days','other')
 let samsang=Phone('SamSang','J8','white','5hrs','smart')

    console.log(nokia.color)


//Using a constructor  
function laptop(brand,ram,hardDisk,processor,os){
    this.brand=brand;
    this.ram=ram;
    this.hardDisk=hardDisk;
    this.processor=processor;
    this.os=os
    }
  
const dell=new laptop('Dell','2GB','1TB','2GHz','Linux')
const hp=new laptop('HP','4GB','500GB','6GHz','Windows')

    
    console.log(dell.ram)