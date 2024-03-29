import * as THREE from "three"
import * as React from "react"
import { Canvas , useFrame, ThreeElements } from "@react-three/fiber"
import './App.css'

function Box(props: ThreeElements["mesh"]) {
    const ref = React.useRef<THREE.Mesh>(null!);
    const [hovered, hover] = React.useState(false);
    const [clicked, click] = React.useState(false);
    useFrame((state, delta) => (ref.current.rotation.x += delta));
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"}/>
        </mesh>
    );
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1 className="large">Hello World!</h1>
                <Canvas>
                    <ambientLight intensity={Math.PI/2}  />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                    <Box position={[1.2, 0, 0]} />
                    <Box position={[-1.2, 0, 0]} />
                </Canvas>
            </div>
        )
    }
}

export default App;
