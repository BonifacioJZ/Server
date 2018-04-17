'use strict'
const Matter = require('../models/matter')

function postMatter(req,res) {
    console.log(req.body)
    let matter = new Matter({
        code:req.body.code,
        mattername: req.body.mattername,
        alumns:[],
        descriptions:req.body.descrip
    })

    matter.save((err,matterStored)=>{
        if(err) res.status(500).send({message:`error al insertar materia ${err}`})

        res.status(200).send({matter:matterStored})
    })
}
function getMatters(req,res) {
    Matter.find({},(err,matters)=>{
        if(err) return res.status(500).send({message:`Error al encontrar las materias ${err}`})
        if(!matters) return res.status(404).send({message:`No existen materias`})
        res.status(200).send({matters})
        
    })

    
}
function getMatter(req,res) {
   let matterId = req.params.idu
   Matter.findById(matterId,(err,matter)=>{
       if(err) return res.status(500).send({message:`Error al buscar la materia ${err}`})
       if(!matter) return res.status(404).send({message:`No existe el producto`})
       res.status(200).send({matter})

   })


    
}
function putMatter(req,res) {
    let matterId = req.params.idu
    let update = req.body
    Matter.findByIdAndUpdate(matterId,update,(err,matterUpdate)=>{
        if(err) res.status(500).send({message:`Error al actualizar la materia ${err}`})

        res.status(200).send({matter:matterUpdate})
    })

    
}


module.exports ={
    postMatter,
    getMatters,
    getMatter,
    putMatter
    
}