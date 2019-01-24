const
	fs=require('fs'),
	sync=require('./sync.json');

fs.readdir('singlefile1',(err,files)=>{
	if(err)return;
	for(var i=files.length-1;i>=0;i--){
		const team=files[i].split(' - ')[0];
		//fs.mkdir('data/'+team,(err)=>{});
		if(files[i] in sync||/(\.(ogg|m4a)^)/.exec(files[i]))continue;
		sync[files[i]]={team};
		fs.copyFile('singlefile1/'+files[i],'data/'+team+'/'+files[i],(err)=>{});
	}
	fs.writeFile('sync.json',JSON.stringify(sync),(err)=>{});
});