
const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  gap:30px 36px;
  color:#fff;
`
const templates = [
  {
    src: 'ref-bigboss.near/widget/ZKEVMSwap.zkevm-bridge',
  },
  {
    src: 'ref-bigboss.near/widget/ZKEVMSwap.zkevm-swap',
  },
  {
    src: 'ref-bigboss.near/widget/ZKEVM.GAMMA',
  },
  {
    src: 'ref-bigboss.near/widget/ZKEVM.AAVE',
  }
]
return <Container>
  {
    templates.map(({src}, index) => <Widget src="ref-bigboss.near/widget/ZKEVM.Template-card" key={index} props={{
      src,
    }}/>)
  }
  
</Container>