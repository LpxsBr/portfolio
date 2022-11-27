import Profile from "../src/components/Profile";
import Projects from "../src/components/Projects";
import Config from "../config.json";
import styled from "styled-components";

export default function Home() {
  return (
    <>
    <Profile />
    <Projects projetos = {Config.projetos}/>
    </>
  )
}
