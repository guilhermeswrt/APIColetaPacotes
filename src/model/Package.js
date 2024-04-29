
const Package = mongoose.model('Package', {
    name: String,
    description: String,
    packageCode: String,
    shippingCompanyCnpj: Number,
    deliveryCpf: Number,
    delivered: Boolean
});