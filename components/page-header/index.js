import Container from "../container";

export default function PageHeader({children}){
  return (
    <div className="pt-20 pb-5 relative">
      <div className="w-7/12 mx-auto text-center">
        <Container>
          <div className="">
            {children}
          </div>
        </Container>
      </div>
    </div>
  )
}