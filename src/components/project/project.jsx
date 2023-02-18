export default function Project(name)
{
    return <mesh name={name} position={[ 0, 0, -0.01 ]}>
        <boxGeometry args={[ 4, 5, .01 ]} />
        <meshStandardMaterial  color='red' />
    </mesh>
}