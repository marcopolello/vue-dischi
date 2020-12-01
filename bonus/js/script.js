var app = new Vue({
  el: '#app',
  data: {
    listaDischi: [],
  },
  mounted: function () {
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(risposta => {
      //console.log(risposta); //elemento chiamato completo
      //console.log(risposta.data.response); //array dei dischi
      const arrayDischi = risposta.data.response
      for(var key in arrayDischi) {
        this.listaDischi.push(arrayDischi[key]);
      }
      //console.log(this.listaDischi);
    });
  },
  methods:{

  }
});
