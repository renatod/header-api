const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    brand: {
      logo: 'https://issues.miisy.com/img/logo/me-white.svg',
      link: 'https://me.com.br',
      newTab: true // links to the same tab if this is ommited
    },
    user: {
      name: "Renato Dias",
      role: "Developer",
      acronym: "RD"
    },
    navItems: [{
      label: 'Transações',
      icon: 'me-icon icon-market',
      click: this.doSomething,
      active: true
    }, {
      label: 'Marketplace',
      icon: 'me-icon icon-market-place',
      url: '#'
    }, {
      label: 'Products',
      icon: 'me-icon icon-products',
      url: '#'
    }, {
      label: 'Mais',
      icon: 'me-icon icon-ellipsis-h',
      siteMap: true
    }, {
      separator: true
    }, {
      label: 'Messages',
      icon: 'me-icon icon-comment-alt-dots',
      url: '#'
    }],
    profileItems: [{
      label: "Profile",
      url: '#'
    },{
      label: "Change Password",
      url: '#'
    },{
      label: "Português (pt-BR)",
      active: true,
      children: [
        { label: "Português (pt-BR)", url: '#' },
        { label: "Ingles (en-US)", url: '#', active: true },
        { label: "Espanhol (es-MX)", url: '#' },
        { label: "Português (pt-PT)", url: '#' }
      ]
    },{
      label: "Logoff",
      url: '#'
    }],
    siteMap: [{
      description: 'Painel de Controle',
      click: this.sayHello,
      children: [{
        description: 'Compras',
        url: '#'
      }]
    }, {
      description: 'Marketplace',
      click: this.sayGoodbye,
      children: []
    }, {
      description: 'Usuários',
      children: [{
        description: 'Usuários',
        url: '#'
      }, {
        description: 'Grupos De Usuários',
        url: '#'
      }]
    }, {
      description: 'PDM',
      children: [{
        description: 'PDM',
        url: '#'
      }]
    }, {
      description: 'Produtos',
      children: [{
        description: 'Sugerir Novo Produto PDM',
        url: '#'
      }, {
        description: 'Visualizar Solicitação',
        url: '#'
      }, {
        description: 'Meus Produtos',
        url: '#'
      }, {
        description: 'Grupos de Produtos',
        url: '#'
      }, {
        description: 'Flows de Produtos',
        url: '#'
      }, {
        description: 'Catálogo de Compras',
        url: '#'
      }]
    }, {
      description: 'Fornecedores',
      children: [{
        description: 'Fornecedores',
        url: '#'
      }, {
        description: 'Atributos de Fornecedores',
        url: '#'
      }, {
        description: 'Meus Fornecedores',
        url: '#'
      }]
    }, {
      description: 'WorkFlow',
      children: [{
        description: 'Permissões',
        url: '#'
      }, {
        description: 'Estados',
        url: '#'
      }, {
        description: 'Atributos Requisição',
        url: '#'
      }]
    }, {
      description: 'Mensagens',
      children: [{
        description: 'Visualizar Mensagens',
        url: '#'
      }]
    }, {
      description: 'Links úteis',
      children: [{
        description: 'Pedidos para Enviar',
        url: '#'
      }, {
        description: 'Mapa Comparativo',
        url: '#'
      }]
    }]
  })
});

app.listen(process.env.PORT || 3100, () => {
  console.log('API running!')
});
