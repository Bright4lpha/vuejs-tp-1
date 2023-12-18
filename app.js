var app = new Vue({
  el: "#app",
  data : {
    user : "",
    myTeam : [],
    pokemonList : [
      {
        "id": "001",
        "name": {
          "english": "Bulbasaur",
          "japanese": "フシギダネ",
          "chinese": "妙蛙种子",
          "french": "Bulbizarre"
        },
        "type": [
          "Grass",
          "Poison"
        ],
        "base": {
          "HP": 45,
          "Attack": 49,
          "Defense": 49,
          "Sp. Attack": 65,
          "Sp. Defense": 65,
          "Speed": 45
        }
      },
      {
        "id": "002",
        "name": {
          "english": "Ivysaur",
          "japanese": "フシギソウ",
          "chinese": "妙蛙草",
          "french": "Herbizarre"
        },
        "type": [
          "Grass",
          "Poison"
        ],
        "base": {
          "HP": 60,
          "Attack": 62,
          "Defense": 63,
          "Sp. Attack": 80,
          "Sp. Defense": 80,
          "Speed": 60
        }
      },
      {
        "id": "003",
        "name": {
          "english": "Venusaur",
          "japanese": "フシギバナ",
          "chinese": "妙蛙花",
          "french": "Florizarre"
        },
        "type": [
          "Grass",
          "Poison"
        ],
        "base": {
          "HP": 80,
          "Attack": 82,
          "Defense": 83,
          "Sp. Attack": 100,
          "Sp. Defense": 100,
          "Speed": 80
        }
      },
      {
        "id": "004",
        "name": {
          "english": "Charmander",
          "japanese": "ヒトカゲ",
          "chinese": "小火龙",
          "french": "Salamèche"
        },
        "type": [
          "Fire"
        ],
        "base": {
          "HP": 39,
          "Attack": 52,
          "Defense": 43,
          "Sp. Attack": 60,
          "Sp. Defense": 50,
          "Speed": 65
        }
      },
      {
        "id": "005",
        "name": {
          "english": "Charmeleon",
          "japanese": "リザード",
          "chinese": "火恐龙",
          "french": "Reptincel"
        },
        "type": [
          "Fire"
        ],
        "base": {
          "HP": 58,
          "Attack": 64,
          "Defense": 58,
          "Sp. Attack": 80,
          "Sp. Defense": 65,
          "Speed": 80
        }
      },
      {
        "id": "006",
        "name": {
          "english": "Charizard",
          "japanese": "リザードン",
          "chinese": "喷火龙",
          "french": "Dracaufeu"
        },
        "type": [
          "Fire",
          "Flying"
        ],
        "base": {
          "HP": 78,
          "Attack": 84,
          "Defense": 78,
          "Sp. Attack": 109,
          "Sp. Defense": 85,
          "Speed": 100
        }
      },
      {
        "id": "007",
        "name": {
          "english": "Squirtle",
          "japanese": "ゼニガメ",
          "chinese": "杰尼龟",
          "french": "Carapuce"
        },
        "type": [
          "Water"
        ],
        "base": {
          "HP": 44,
          "Attack": 48,
          "Defense": 65,
          "Sp. Attack": 50,
          "Sp. Defense": 64,
          "Speed": 43
        }
      },
      {
        "id": "008",
        "name": {
          "english": "Wartortle",
          "japanese": "カメール",
          "chinese": "卡咪龟",
          "french": "Carabaffe"
        },
        "type": [
          "Water"
        ],
        "base": {
          "HP": 59,
          "Attack": 63,
          "Defense": 80,
          "Sp. Attack": 65,
          "Sp. Defense": 80,
          "Speed": 58
        }
      },
      {
        "id": "009",
        "name": {
          "english": "Blastoise",
          "japanese": "カメックス",
          "chinese": "水箭龟",
          "french": "Tortank"
        },
        "type": [
          "Water"
        ],
        "base": {
          "HP": 79,
          "Attack": 83,
          "Defense": 100,
          "Sp. Attack": 85,
          "Sp. Defense": 105,
          "Speed": 78
        }
      },
      {
        "id": "010",
        "name": {
          "english": "Caterpie",
          "japanese": "キャタピー",
          "chinese": "绿毛虫",
          "french": "Chenipan"
        },
        "type": [
          "Bug"
        ],
        "base": {
          "HP": 45,
          "Attack": 30,
          "Defense": 35,
          "Sp. Attack": 20,
          "Sp. Defense": 20,
          "Speed": 45
        }
      },
      {
        "id": "011",
        "name": {
          "english": "Metapod",
          "japanese": "トランセル",
          "chinese": "铁甲蛹",
          "french": "Chrysacier"
        },
        "type": [
          "Bug"
        ],
        "base": {
          "HP": 50,
          "Attack": 20,
          "Defense": 55,
          "Sp. Attack": 25,
          "Sp. Defense": 25,
          "Speed": 30
        }
      },
      {
        "id": "012",
        "name": {
          "english": "Butterfree",
          "japanese": "バタフリー",
          "chinese": "巴大蝶",
          "french": "Papilusion"
        },
        "type": [
          "Bug",
          "Flying"
        ],
        "base": {
          "HP": 60,
          "Attack": 45,
          "Defense": 50,
          "Sp. Attack": 90,
          "Sp. Defense": 80,
          "Speed": 70
        }
      },
      {
        "id": "013",
        "name": {
          "english": "Weedle",
          "japanese": "ビードル",
          "chinese": "独角虫",
          "french": "Aspicot"
        },
        "type": [
          "Bug",
          "Poison"
        ],
        "base": {
          "HP": 40,
          "Attack": 35,
          "Defense": 30,
          "Sp. Attack": 20,
          "Sp. Defense": 20,
          "Speed": 50
        }
      },
      {
        "id": "014",
        "name": {
          "english": "Kakuna",
          "japanese": "コクーン",
          "chinese": "铁壳蛹",
          "french": "Coconfort"
        },
        "type": [
          "Bug",
          "Poison"
        ],
        "base": {
          "HP": 45,
          "Attack": 25,
          "Defense": 50,
          "Sp. Attack": 25,
          "Sp. Defense": 25,
          "Speed": 35
        }
      },
      {
        "id": "015",
        "name": {
          "english": "Beedrill",
          "japanese": "スピアー",
          "chinese": "大针蜂",
          "french": "Dardargnan"
        },
        "type": [
          "Bug",
          "Poison"
        ],
        "base": {
          "HP": 65,
          "Attack": 90,
          "Defense": 40,
          "Sp. Attack": 45,
          "Sp. Defense": 80,
          "Speed": 75
        }
      },
      {
        "id": "016",
        "name": {
          "english": "Pidgey",
          "japanese": "ポッポ",
          "chinese": "波波",
          "french": "Roucool"
        },
        "type": [
          "Normal",
          "Flying"
        ],
        "base": {
          "HP": 40,
          "Attack": 45,
          "Defense": 40,
          "Sp. Attack": 35,
          "Sp. Defense": 35,
          "Speed": 56
        }
      },
      {
        "id": "017",
        "name": {
          "english": "Pidgeotto",
          "japanese": "ピジョン",
          "chinese": "比比鸟",
          "french": "Roucoups"
        },
        "type": [
          "Normal",
          "Flying"
        ],
        "base": {
          "HP": 63,
          "Attack": 60,
          "Defense": 55,
          "Sp. Attack": 50,
          "Sp. Defense": 50,
          "Speed": 71
        }
      },
      {
        "id": "018",
        "name": {
          "english": "Pidgeot",
          "japanese": "ピジョット",
          "chinese": "大比鸟",
          "french": "Roucarnage"
        },
        "type": [
          "Normal",
          "Flying"
        ],
        "base": {
          "HP": 83,
          "Attack": 80,
          "Defense": 75,
          "Sp. Attack": 70,
          "Sp. Defense": 70,
          "Speed": 101
        }
      },
      {
        "id": "019",
        "name": {
          "english": "Rattata",
          "japanese": "コラッタ",
          "chinese": "小拉达",
          "french": "Rattata"
        },
        "type": [
          "Normal"
        ],
        "base": {
          "HP": 30,
          "Attack": 56,
          "Defense": 35,
          "Sp. Attack": 25,
          "Sp. Defense": 35,
          "Speed": 72
        }
      },
      {
        "id": "020",
        "name": {
          "english": "Raticate",
          "japanese": "ラッタ",
          "chinese": "拉达",
          "french": "Rattatac"
        },
        "type": [
          "Normal"
        ],
        "base": {
          "HP": 55,
          "Attack": 81,
          "Defense": 60,
          "Sp. Attack": 50,
          "Sp. Defense": 70,
          "Speed": 97
        }
      }
    ]
  },
  methods : {
    addPokemon(pokemon, i){
      // console.log(pokemon);
      this.myTeam.push(pokemon);
      this.pokemonList.splice(i, 1);
    },
    deletePokemon(pokemon, i){
      this.pokemonList.push(pokemon);
      this.myTeam.splice(i, 1);
    }
  }
});