import styled from "styled-components"

const ProfileStyled = styled.section`

heigth: 100%;
display: flex;
justify-content: center;
padding:10%;


.user-information{
    display: flex;
    justify-content: center;
    h3{
        width: 50%;
        text-align: center;
        margin: 10px;
    }
}


.profile-image{
    display: flex;
    justify-content: center;
    img{
        display: flex;
        width: 200px;
        border-radius: 50%;
    }
    img:hover{
        box-shadow: 2px 2px 50px 2px white;
    }
}

`;

export default function Profile() {
    return (
        <ProfileStyled>
            <section>
                <div className="profile-image">
                    <img src="https://avatars.githubusercontent.com/u/96118395?v=4"/>
                </div>
                <div className="user-information">
                    <h3>Hi! My name is Anselmo Lopes</h3>
                </div>
            </section>
        </ProfileStyled>
    )
}