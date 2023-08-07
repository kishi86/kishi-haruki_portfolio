import styles from "@/styles/profile/skills.module.scss"

export const Skills = () =>{
  return(
    <section className={styles.skills}>
        <h2>Skills</h2>
        <h3>グラフィック系</h3>
        <ul className={styles.skill_list}>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/ai.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>Illustrator</h4>
              <p>使用歴１５年！<br/>
              ポスター、フリーペーパー、パッケージ、リーフレット、イラスト、Webデザインなど</p>
            </div>
          </li>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/ps.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>Photoshop</h4>
              <p>使用歴３年<br/>
              画像のレタッチと簡単な合成ができる程度</p>
            </div>
          </li>
          {/* <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/id.svg" alt="" />
            <h3>In</h3>
            <p>使用歴半年<br/>
            紙版のポートフォリオ制作で使用</p>
          </li> */}
        </ul>

        <h3>Web系</h3>
        <ul className={styles.skill_list}>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/xd.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>XD</h4>
              <p>使用歴１年半<br/>
              Webデザインで使用。基本的な操作は一通り可能</p>
            </div>
          </li>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/figma.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>Figma</h4>
              <p>使用歴１年半<br/>
              ワイヤーフレームの作成など、基本的な操作は一通り可能</p>
            </div>
          </li>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/html5.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>HTML</h4>
              <p>使用歴１年半<br/>
              Web制作で使用。基本的なコードが書ける程度</p>
            </div>
          </li>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/css3.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>CSS</h4>
              <p>使用歴１年半<br/>
              Web制作で使用。デザイン通りのレイアウトは可能</p>
            </div>
          </li>
        </ul>

        <h3>開発系</h3>
        <ul className={styles.skill_list}>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/touchDesigner.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>TouchDesigner</h4>
              <p>使用歴１年半<br/>
              体験型コンテンツの制作で使用</p>
            </div>
          </li>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/unity.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>Unity</h4>
              <p>使用歴半年<br/>
              C#を使用し、極簡単なミニゲームを作成</p>
            </div>
          </li>
        </ul>

        <h3>映像系</h3>
        <ul className={styles.skill_list}>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/pr.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>PremierePro</h4>
              <p>使用歴１年<br/>
              映像編集の基礎を学ぶ</p>
            </div>
          </li>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/ae.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>AfterEffects</h4>
              <p>使用歴１年半<br/>
            初歩的な2Dアニメーションを制作</p>
           </div>
          </li>
        </ul>

        <h3>3D系</h3>
        <ul className={styles.skill_list}>
          <li className={styles.skill_item}>
            <img src="../images/profile/skill_icon/blender.svg" alt="" />
            <div className={styles.skill_description}>
              <h4>Blender</h4>
              <p>使用歴１年<br/>
              ボトルのモックアップなどを作成。単純なモデリングができる程度</p>
            </div>
          </li>
        </ul>
      </section>
  )
}
export default Skills;