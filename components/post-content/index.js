import Container from "../container";
import Card from "../card";

export default function PostContent({htmlContent}){
  return(
    <div className="relative">
      <Container>
        <div className="w-full md:w-10/12">
          <Card>
            <div className="p-8 unreset" dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </Card>
        </div>
      </Container>
    </div>
  )
}