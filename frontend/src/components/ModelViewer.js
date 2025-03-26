import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { useLoader } from "@react-three/fiber";

const ModelViewer = ({ modelPath }) => {
    const geometry = useLoader(STLLoader, modelPath);

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <mesh geometry={geometry}>
                <meshStandardMaterial color="blue" />
            </mesh>
            <OrbitControls />
        </Canvas>
    );
};

export default ModelViewer;
