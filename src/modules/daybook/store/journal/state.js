//datos reactivos que cuando cambian se puede notificar a todos los componentes donde se estén escuchando los cambios

export default () => ({
    isLoading: true,
    entries: [
        {
            // id: new Date().getTime(), //12341234
            id: '1',
            date: new Date().toDateString(), //sat 23, julio
            text: 'Irure eu dolor occaecat quis aliquip minim cillum qui cupidatat sunt in veniam est. Do pariatur aliqua aute velit culpa dolor officia non. Culpa quis cillum voluptate ad est exercitation. Magna voluptate velit ut labore.',
            picture: null
        },
        {
            // id: new Date().getTime()+1000, //12341234
            id:'2',
            date: new Date().toDateString(), //sat 23, julio
            text: 'Amet ex laborum culpa reprehenderit deserunt eiusmod sit in occaecat sit adipisicing minim in. Et esse minim reprehenderit voluptate. Et adipisicing nulla sit laborum incididunt enim cillum officia adipisicing esse ea ex.',
            picture: null
        },
        {
            // id: new Date().getTime()+2000, //12341234
            id:'3',
            date: new Date().toDateString(), //sat 23, julio
            text: 'Exercitation anim mollit anim velit irure est veniam. Sit minim esse velit non nulla mollit cillum id sit do occaecat. Cupidatat labore exercitation amet consectetur occaecat adipisicing voluptate excepteur sunt. Velit deserunt nostrud ex nulla deserunt in sint amet incididunt labore nulla. Dolore est ut occaecat do nostrud esse qui ut nulla sint. Pariatur officia pariatur mollit deserunt ipsum voluptate aliqua incididunt laborum ex adipisicing. Est qui laboris cillum proident tempor ex excepteur non est incididunt ullamco laborum officia veniam.',
            picture: null
        },
        {
            // id: new Date().getTime()+3000, //12341234
            id:'4',
            date: new Date().toDateString(), //sat 23, julio
            text: 'Tempor occaecat et tempor et magna eu nulla magna exercitation et do. Do laboris amet do nulla quis et quis incididunt deserunt nisi ex aute cupidatat. Nulla exercitation elit id laborum cillum adipisicing duis deserunt consequat ipsum. Quis elit laborum eu minim minim do magna voluptate elit consequat consectetur voluptate aliquip.',
            picture: null
        }
    ]
})