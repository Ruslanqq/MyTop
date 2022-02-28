import { Button } from "../components";
import { Htag } from "../components/htags/htags";



export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag = 'h1'>Next</Htag>
      <Button appearance="primary">Button</Button>
    </div>
  ); 
}