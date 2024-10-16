async function getPokemonData(pokemonName) {
    //constとは値書き換えを禁止した変数を宣言する方法
    //$…1.jQuery(Webサイトの利用者にとっては、必要な時にだけやりたいことができる仕組みです。
    //    一方その制作者にとり、ページ上の限られた場所を有効活用するための機能を、効率的に実装できる手段です。) 
    //  2.テンプレートリテラル内での使用（文字列を複数行にまたいで記述することが可能な上、
    //    スコープ内の変数を文字列内に呼び出すことが出来る）
    //  3.正規表現への使用
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
      //console上でdataを表示する
      console.log(data);
  }
  
  getPokemonData("ditto")