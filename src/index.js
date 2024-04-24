const express = require('express')
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000

//MongoDB Connection:
mongoose.connect('mongodb+srv://guilhermeswrt:jbmyNyYLmpva8T93@apicoletapacote.dt5dxmb.mongodb.net/?retryWrites=true&w=majority&appName=APIColetaPacote');

const Package = mongoose.model('Package', {
    name: String,
    description: String,
    packageCode: String,
    shippingCompanyCnpj: Number,
    deliveryCpf: Number,
    delivered: Boolean
});

const ShippingCompany = mongoose.model('ShippingCompany', {
    name: String,
    description: String,
    cnpj: Number
});

const Delivery = mongoose.model('Delivery', {
    name: String,
    car: String,
    cpf: Number,
    actingArea: String,
    actingHour: String
});

app.get ('/package', async (req, res) => {
    const package = await Package.find()
    res.send(package)
})

app.get ('/shippingCompany', async (req, res) => {
    const package = await ShippingCompany.find()
    res.send(package)
})

app.get ('/delivery', async (req, res) => {
    const package = await Delivery.find()
    res.send(package)
})

app.post("/package/create", async (req, res) => {
    const package = new Package({
        name: req.body.name,
        description: req.body.description,
        packageCode: req.body.packageCode,
        shippingCompanyCnpj: req.body.shippingCompanyCnpj,
        deliveryCpf: req.body.deliveryCpf,
        delivered: req.body.delivered
    })

    await package.save()
    res.send(package)
})

app.post("/shippingCompany/create", async (req, res) => {
    const shippingCompany = new ShippingCompany({
        name: req.body.name,
        description: req.body.description,
        cnpj: req.body.cnpj
    })

    await shippingCompany.save()
    res.send(shippingCompany)
})

app.post("/delivery/create", async (req, res) => {
    const delivery = new Delivery({
        name: req.body.name,
        car: req.body.car,
        cpf: req.body.cpf,
        actingArea: req.body.actingArea,
        actingHour: req.body.actingHour
    })

    await delivery.save()
    res.send(delivery)
})

app.delete("/package/delete/:id", async(req, res) => {
    const package = await Package.findByIdAndDelete(req.params.id, {new: true})
    res.send(package)
})

app.delete("/shippingCompany/delete/:id", async(req, res) => {
    const package = await ShippingCompany.findByIdAndDelete(req.params.id, {new: true})
    res.send(package)
})

app.delete("/delivery/delete/:id", async(req, res) => {
    const package = await Delivery.findByIdAndDelete(req.params.id, {new: true})
    res.send(package)
})

app.listen(port, () =>{
    console.log('app runnig')
})

app.put("/package/update/:id", async(req, res) => {
    const package = await Package.findByIdAndUpdate(
        req.params.id, {
            name: req.body.name,
            description: req.body.description,
            packageCode: req.body.packageCode,
            shippingCompanyCnpj: req.body.shippingCompanyCnpj,
            deliveryCpf: req.body.deliveryCpfm,
            delivered: req.body.delivered
    },
    {
        new:true
    })

    res.send(package)
})

app.put("/shippingCompany/update/:id", async(req, res) => {
    const package = await ShippingCompany.findByIdAndUpdate(
        req.params.id, {
            name: req.body.name,
            description: req.body.description,
            cnpj: req.body.cnpj
    },
    {
        new:true
    })

    res.send(package)
})

app.put("/delivery/update/:id", async(req, res) => {
    const package = await Delivery.findByIdAndUpdate(
        req.params.id, {
            name: req.body.name,
            car: req.body.car,
            cpf: req.body.cpf,
            actingArea: req.body.actingArea,
            actingHour: req.body.actingHour
    },
    {
        new:true
    })

    res.send(package)
})