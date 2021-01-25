
interface Theme {
  bg: {
    
  }
  fg: {
    text:string
  }
  gradient: {
    primary:string[]
  }
}

const theme:Theme = {
  bg:{

  },
  fg:{
    text: '#263238' // blueish gray
  },
  gradient: {
    primary: ['#9c27b0','#e040fb']
  }
}

export default theme