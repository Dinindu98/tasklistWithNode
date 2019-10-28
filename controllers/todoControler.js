var data = [{item:'item 1'},{item:'item 2'},{item:'item 3'}]

module.exports = function(app){

app.get('/todo',function(req,res){
 res.render('todo',{todos:data});
});

app.post('/todo',function(req,res){

});

app.delete('/todo',function(req,res){

});
};