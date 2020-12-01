var app = new Vue({
  el: '#app',
  data: {
    listaDischi: [],
    genere: '',
  },
  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(risposta => {
      //console.log(risposta); //elemento chiamato completo
      console.log(risposta.data.response); //array dei dischi
      let arrayDischi = risposta.data.response;
      for (var i = 0; i < arrayDischi.length; i++) {
        arrayDischi[i].visible = true;
      } //ciclato l'array per mettere nuova proprietà
      for(let key in arrayDischi) {
        this.listaDischi.push(arrayDischi[key]);
      } //ciclato oggetti dentro l'array per salvarmeli
      //console.log(this.listaDischi);
    });
  },
  methods:{
    cercaGenere() {
      this.listaDischi.visible = false;
      this.listaDischi.forEach((item, i) => {
        let gen = item.genre;
        gen = gen.toLowerCase();
        if (gen.includes(this.genere)) {
          item.visible = true;
        } else {
          item.visible = false;
        }
      });
    }
  }
});
