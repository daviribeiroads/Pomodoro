import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";

import "./styles/global.css";
import "./styles/theme.css";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!1
        <button>
            <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio sapiente
        quidem, molestias quae consequuntur beatae laudantium voluptatum!
        Incidunt, officiis impedit ab iste dolor a fugiat iusto eos accusamus,
        nobis voluptates! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Cupiditate eveniet maxime vitae, totam quidem quis assumenda nihil
        eligendi eos? Minus facilis placeat blanditiis atque voluptates tempore
        explicabo culpa quos asperiores! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quia numquam eum autem assumenda laboriosam dolorum
        nobis voluptatum perspiciatis soluta veritatis atque, quod labore
        placeat quas nemo repudiandae, voluptates voluptatibus fugiat?Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Nobis, impedit
        perspiciatis. Suscipit ad unde tempora itaque? Deleniti exercitationem
        at cupiditate corporis esse optio laboriosam consectetur necessitatibus
        similique voluptate, delectus ipsa.
      </p>
    </>
  );
}
