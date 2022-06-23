export function fakeRequest(mockFile: string, mockValue: string, ms?: number){
  return new Promise((res,rej)=>{

    if(!mockFile && !mockValue){
      rej({
        error: "forneça parametros válidos"
      })
    }

    const requestMs = ms || Math.floor(Math.random()*1000)
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const file = require(`@/tests/mocks/${mockFile}.json`)

    setTimeout(()=>{
      res(file[mockValue])
    }, requestMs)

  })

}
