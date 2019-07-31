<template>
  <div class="theme-selector" :class="{ 'close-theme-selector': isValid }">
    <div class="header">
      <p class="title">Tema</p>
      <button class="close" @click="closeThemeSelector">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <form class="form" action="main.vue" name="submit">
      <div class="container">
        <p class="subtitle">Cores</p>
        <label class="item colors" v-for="(option, idx) in options" :key="idx">{{ option.desc }}
          <input 
            class="input"
            type="radio"
            :value="option.name"
            v-model="selectedItem" 
            @click="changeClasses(option.name)"/>
          <span class="checkmark"></span>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
export default {

  data () {
    return {
      isValid: false,
      sender: 'theme-selector',
      options: [
        {  name: 'theme-light', isChecked: false, desc: 'Claro' },
        {  name: 'theme-yellow-light', isChecked: false,  desc: 'Claro Amarelado' },
        {  name: 'theme-gray-blue-dark', isChecked: true,   desc: 'Escuro Cinza (Padrão)' },
        {  name: 'theme-pink-dark', isChecked: false,  desc: 'Escuro Rosa' }
      ],
      defaultTheme: 'theme-gray-blue-dark',
      selectedItem: ''
    }
  },
  mounted () {
    this.changeClasses(this.defaultTheme)
  },
  methods: {
    changeTheme (theme) {
      this.layout = this[theme]
    },
    closeThemeSelector () {
      this.isValid = !this.isValid
    },
    changeClasses (paramers) {
      const bodyElem = document.getElementsByTagName("body")[0]
      let currentClassNames = []
      this.selectedItem = paramers 

      bodyElem.classList.forEach((value, idx) => {
        if(value.indexOf("theme") > -1) {
          currentClassNames.push(value)
        }
      })

      currentClassNames.forEach(value => {
        bodyElem.classList.remove(value)
      })

      bodyElem.classList.add(this.selectedItem)
      
       window.dispatchEvent(
        new CustomEvent('DIALOG_VALUE_CHANGE', { 
          detail: { 
            sender: this.sender,
            message: paramers,
            at: new Date().toISOString()
          } 
        })
      );

    },
  }
}
</script>
<style lang="scss">

  $fuse-navy-700: #2D323E;
  $fuse-navy-900: #1E2129; 
  $fuse-gray-blue: #607d8b;
  $fuse-brown: #303030;
  $fuse-navy-light: #fafafa;
  $fuse-light: #989898;
  $fuse-dark: #545454;
  $fuse-blue: #039be5;
  $fuse-yellow: #FDD835;
  $fuse-pink: #e91e63;
  $font-muli: Muli, sans-serif;
  $font-20: 20px;
  $font-16: 16px;
  $font-14: 14px;
  $font-12: 12px;

  @mixin theme-gray-blue-dark() {
    background-color: $fuse-brown;
    .title{ color: $fuse-navy-light }      
    .fa-times{ color: $fuse-navy-light }
    .subtitle{ background: $fuse-brown }
    .item {
      color: $fuse-navy-light;
      > .input { border-color: $fuse-navy-light }
      > .input:hover ~ .checkmark {
        box-shadow:  0px 0px 10px $fuse-navy-light;
      }
      > .input:checked ~ .checkmark {
        border: 2px solid $fuse-gray-blue;
      }
      > .input:checked ~ .checkmark:hover {
        box-shadow:  0px 0px 20px $fuse-gray-blue;
      }
      > .checkmark{
        border: 2px solid $fuse-navy-light;
      }
      > .checkmark:after {
        background: $fuse-gray-blue;
      }
    }
  }

  @mixin theme-light{

    background-color: $fuse-navy-light;
    .title { color: $fuse-dark }      
    .fa-times { color: $fuse-dark }
    .subtitle{ background: $fuse-navy-light }
    .item { color: $fuse-dark;
      > .input{
        border-color: $fuse-dark;
      }
      > .input:hover ~ .checkmark {
        box-shadow:  0px 0px 10px $fuse-dark;
      }
      > .input:checked ~ .checkmark {
        border: 2px solid $fuse-blue;
      }
      > .input:checked ~ .checkmark:hover {
        box-shadow:  0px 0px 20px $fuse-blue;
      }
      > .checkmark {
        border: 2px solid $fuse-dark;
      }
      > .checkmark:after {
        background: $fuse-blue;
      }
    }
  }

  @mixin theme-yellow-light {

    background-color: $fuse-navy-light;
    .title { color: $fuse-dark }      
    .fa-times { color: $fuse-dark }
    .subtitle { background: $fuse-navy-light }
    .item {
      color: $fuse-dark;
      > .input{
        border-color: $fuse-dark;
      }
      > .input:hover ~ .checkmark {
        box-shadow:  0px 0px 10px $fuse-dark;
      }
      > .input:checked ~ .checkmark {
        border: 2px solid $fuse-yellow;
      }
      > .input:checked ~ .checkmark:hover {
        box-shadow:  0px 0px 20px $fuse-yellow;
      }
      > .checkmark {
        border: 2px solid $fuse-dark;
      }
      > .checkmark:after {
        background: $fuse-yellow;
      }
    }
  }

  @mixin theme-pink-dark{
    
    background-color: $fuse-brown;
    .title { color: $fuse-navy-light }      
    .fa-times { color: $fuse-navy-light }
    .subtitle { background: $fuse-brown }
    .item {
      color: $fuse-navy-light;
      > .input{
        border-color: $fuse-navy-light;
      }
      > .input:hover ~ .checkmark {
        box-shadow:  0px 0px 10px $fuse-navy-light;
      }
      > .input:checked ~ .checkmark{
        border: 2px solid $fuse-pink;
      }
      > .input:checked ~ .checkmark:hover{
        box-shadow:  0px 0px 20px $fuse-pink;
      }
      > .checkmark{
        border: 2px solid $fuse-navy-light;
      }
      > .checkmark:after{
        background: $fuse-pink;
      }
    }
  }

  .theme-gray-blue-dark{
    @include theme-gray-blue-dark();
  }
  .theme-light{
    @include theme-light;
  }
  .theme-yellow-light{
    @include theme-yellow-light;
  }
  .theme-pink-dark{
    @include theme-pink-dark;
  }

  *{
    margin: 0;
    padding: 0;
    font-family: $font-muli;
    line-height: 1.4;
    letter-spacing: -0.1px;
  }
  a {
    text-decoration: none; color: inherit;
  }
  .close-theme-selector{
    transition-duration: 1s;
    transform: translateX(360px);
  }
  .theme-selector {
    width: 310px;
    height: calc(100vh - 300px);
    padding: 40px 25px 25px 25px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 3px #000;
    > .header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      > .title {
        font-size: $font-20;
        font-weight: 600;
      }
      > .close {
        display: flex;
        align-items: center;
        height: 24px;
        background: transparent;
        border: none;
        outline: none;
        > .fa-times{
          font-size: 24px;
        }
      }
    }
    .form {
      width: 315px;
      .container {
        position: relative;
        display: flex;
        flex-direction: column;
        padding: 28px 16px 8px 16px;
        border: 1px solid $fuse-light;
        border-radius: 2px;
          > .subtitle {
            position: absolute;
            top: -11px;
            left: 8px;
            padding: 0px 5px;
            font-weight: 700;
            color: $fuse-light;
          }
          > .item {
            font-size: $font-16;
            font-weight: 700;
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            > .input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }
            > .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 15px;
                width: 15px;
                background-color: transparent;
                border-radius: 50%;
            }
            .checkmark:after {
              content: "";
              position: absolute;
              display: none;
            }
            .input:checked ~ .checkmark:after {
              display: block;
            }
            .checkmark:after {
              top: 2px;
              left: 2px;
              width: 11px;
              height: 11px;
              border-radius: 50%;  
            }
          }
        }
    }
  }
</style>
