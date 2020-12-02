var app = new Vue({
  el: '#app',
  data: {
    listaDischi: [],
    genere: '',
    genereSel: '',
  },
  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(risposta => {
      //console.log(risposta); //elemento chiamato completo
      //console.log(risposta.data.response); //array dei dischi
      let arrayDischi = risposta.data.response;
      for (var i = 0; i < arrayDischi.length; i++) {
        arrayDischi[i].visible = true;
      } //ciclato l'array per mettere nuova proprietà

      this.listaDischi = arrayDischi; //mi salvo direttamente tutti i dati ricevuti dalla chiamata
    });
  },
  computed: {
    filtroGenere: function () {
      return this.listaDischi.filter((album) =>{
        if (this.genereSel === "" || this.genereSel === "All") {
          return this.listaDischi;
        } else {
          return album.genre === this.genereSel;
        }
      });
    }
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
    },
  }
});
