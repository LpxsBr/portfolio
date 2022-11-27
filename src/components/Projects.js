import styled from "styled-components";

const ProjectStyled = styled.div`

display: flex;
justify-content: center;

.projectItem{
    display: flex;
    justify-content: center;
    padding: 20px;
    height: 100%;
    width: 40%;
    border-radius: 10px;
    background: #1C1C1C;
    margin: 10px;
    flex-wrap: wrap;
    .title{
        font-weight: bold;
    }
    img{
        width: 400px;
        margin: 20px
    }
    img:hover{
        box-shadow: 2px 2px 50px 2px white;
    }
}
`;

export default function Projects({ ...props }) {
    const projectInfo = Object.keys(props.projetos);
    return (
        projectInfo.map((projeto) => {
            const projetos = props.projetos[projeto];
            return (
                
        <ProjectStyled>
            <div className="projectItem">
                <span className="title">
                    {projetos.projectTitle}
                </span>
                <img src={projetos.image}/>
            </div>
        </ProjectStyled>
            )
        })
    )
}