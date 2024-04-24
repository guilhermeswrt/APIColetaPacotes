# APIColetaPacotes
Contato MOTORISTA/TRANSPORTADORA


============================================================

To Start:

`npm install`

`node .\src\index.js`

============================================================
- TRANSPORTADORA REGISTRA 
	- CNPJ
	- SENHA
	- PACOTES disponíveis para entrega (Quantidade/Cidade/Fragil/Tipo/Tamanho)

- MOTORISTA se cadastra (tipo uber)
	- CPF
	- SENHA
	- Identifica o tipo do CARRO/MOTO DO MOTORISTA (Marca/Modelo/Peso suportado/Hatch/Pickup/Transporte de Frágeis/etc...)
	- Identifica a AREA DE ATUAÇÃO
	- Identifica o HORÁRIO DE TRABALHO
- MOTORISTA faz a coleta do PACOTE
- MOTORISTA REGISTRA início da entrega do PACOTE
- MOTORISTA tenta entregar
	- Se não conseguir: MOTORISTA retorna para TRANSPORTADORA