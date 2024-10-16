import React from "react";
import NavBar from "./NavBar";
import "./App.css"




// in the spirit of time i didn't want to make the about too complex but I still wanted it to be interesting; 
// So I included some new information to some people and I made a very *unique* logo my own concoction to stilll draw the user in.  



function About() {
  return (
    <main>

      <h1 className="logo" id="potterpalss">
        The PotterHub
      </h1>
      <NavBar />
      <div className="potterFacts">
        <h2 id="welcome">Welcome to <span id="bigpotter"><span id="potter">Potter</span><span id="hub">Hub</span></span> </h2>
        <p className ="fancytext">
          
            On this site you'll have access to an extensive list
            of Harry Potter spells and characters. 
            <br/><br/>
            Feel free to browse through
            the spells and explore their unique effects. If you're feeling
            creative, click on "New Spell" to open a form where you can craft
            your own magical creation: give it a name, describe its effects,
            choose its color, and even add an image to bring your spell to life!
            Let that creativity continue to flourish by creating your very own
            PotterPal! Choose a Name, House, and Wand Type to help you on your
            journey!
          
        </p>
        <br />
      </div>
      <div className="potterFacts fancytext">
        <p>
          <strong>
            Here are some fun Potter Facts that highlight the difference between
            the books and the movies!
          </strong>
        </p>
        <ol >
          <li >
            <strong>Character Development and Omission:</strong>
            <br />
            <em>
              <strong >Peeves the Poltergeist</strong>
            </em>
            : Peeves is a mischievous poltergeist who causes chaos throughout
            Hogwarts in the books, but he is entirely omitted from the movies.
            <p>
              <strong>
                <em>Winky the House-Elf</em>
              </strong>
              : Winky, a house-elf who plays a significant role in the book
              "Harry Potter and the Goblet of Fire," is missing from the films.
              Her story involves the backstory of Barty Crouch Jr. and the
              house-elves' subjugation.
            </p>
            <p>
              <strong>
                <em>Professor Binns</em>
              </strong>
              : The ghostly History of Magic teacher is present in the books but
              does not appear in any of the films.{" "}
            </p>{" "}
            <p>
              <strong>
                <em>Charlie Weasley</em>
              </strong>
              : The second eldest Weasley brother, Charlie, has minor roles in
              the books but is barely mentioned in the films. His work with
              dragons and his involvement in the Triwizard Tournament are
              largely left out.
            </p>
          </li>
          <br />
          <br />
          <li >
            <strong>Omitted Subplots and Scenes</strong>
            <p>
              <strong >
                S.P.E.W.(Society for the Promotion of Elfish Welfare)
              </strong>{" "}
              : Hermione starts S.P.E.W. in "Goblet of Fire" to campaign for
              house-elf rights, but this subplot is entirely omitted from the
              films.{" "}
            </p>
            <p>
              <strong>Marietta Edgecombe</strong> : In "Order of the Phoenix,"
              Marietta is the student who betrays Dumbledore's Army. In the
              movie, this role is given to Cho Chang, simplifying the storyline.
            </p>
            <p>
              <strong>The Marauders' Backstory</strong> : The backstory of the
              Marauders (James Potter, Sirius Black, Remus Lupin, and Peter
              Pettigrew) and their creation of the Marauder's Map is explored in
              "Prisoner of Azkaban" but is not fully explained in the movie.
            </p>
            <p>
              <strong>The Gaunt Family</strong> : The background of Voldemort's
              family, particularly the Gaunts, is covered in detail in
              "Half-Blood Prince." This subplot, which explains the origins of
              several Horcruxes, is significantly reduced in the movie.
            </p>
          </li>
          <li>
            <strong>Changes in Specific Scenes</strong>
            <p>
              <strong>The Final Duel</strong>: In the book "Deathly Hallows,"
              the final duel between Harry and Voldemort takes place in the
              Great Hall in front of all the Hogwarts students and staff,
              highlighting Harry's bravery and the collective support of the
              wizarding community. In the movie, the duel is more dramatic and
              isolated, taking place in a courtyard with just Harry and
              Voldemort.
            </p>
            <p>
              <strong>Dumbledore’s Death</strong>: In "Half-Blood Prince," when
              Dumbledore is killed by Snape, Harry is paralyzed by a spell under
              his Invisibility Cloak and watches the event unfold. In the movie,
              Harry is not hidden or paralyzed; he witnesses the scene but does
              not intervene, a change that impacts the interpretation of his
              character.
            </p>
            <p>
              <strong>The Burning of The Burrow</strong>: In "Half-Blood
              Prince," there is a scene where Death Eaters attack and burn down
              the Weasley's house, The Burrow. This scene does not happen in the
              book and was added to the movie to heighten tension.
            </p>
          </li>
          <li>
            <strong>
              <em>Portrayal of Characters and Relationships</em>
            </strong>
            <p>
              <strong>
                <em>Ginny Weasley</em>
              </strong>
              : In the books, Ginny is portrayed as a strong, independent, and
              charismatic character with a lot of depth. The movies, however,
              downplay her personality and the development of her relationship
              with Harry, making it feel less dynamic and rushed.
            </p>
            <p>
              <strong>
                <em>Dumbledore's Demeanor</em>
              </strong>
              : In the books, Dumbledore is known for his calm, wise, and
              slightly eccentric demeanor. In "Goblet of Fire," there's a scene
              where Dumbledore asks Harry if he put his name in the Goblet of
              Fire. In the book, he asks calmly, but in the movie, Dumbledore is
              portrayed as angry and forceful, which is a significant departure
              from his character in the books.
            </p>
            <p>
              <strong>
                <em>Ron Weasley's Role</em>
              </strong>
              : Ron is often portrayed as more of a comic relief character in
              the movies, with many of his key actions and lines being given to
              Hermione. For example, Hermione is shown solving the mystery of
              the basilisk in "Chamber of Secrets," while in the book, Ron
              contributes significantly.
            </p>
          </li>
          <li>
            <strong>Altered or Simplified Plot Points</strong>
            <p>
              <strong>
                <em>Harry's Invisibility Cloak</em>
              </strong>
              : In the books, Harry frequently uses his Invisibility Cloak,
              which plays a significant role in various scenes, such as sneaking
              around Hogwarts or attending secret meetings. In the movies, the
              cloak is used much less often.
            </p>
            <p>
              <strong>
                <em>The Elder Wand</em>
              </strong>
              : The ending of "Deathly Hallows" is altered significantly in the
              film. In the book, Harry uses the Elder Wand to repair his own
              wand and then plans to return the Elder Wand to Dumbledore's tomb.
              In the movie, Harry simply snaps the Elder Wand in half and throws
              it away.
            </p>
            <p>
              <strong>
                <em>The Half-Blood Prince's Identity</em>
              </strong>
              : The revelation of Snape being the Half-Blood Prince is a major
              plot point in the book "Half-Blood Prince," but in the movie, it
              feels less significant and is revealed quickly without much
              build-up or importance.
            </p>
          </li>
          <li>
            <strong>Tone and Atmosphere</strong>
            <strong>
              <em>Humor and Darkness</em>
            </strong>
            : The movies tend to add more humor in places where the books are
            more serious, and they sometimes amplify the darker elements for
            visual and emotional impact. For example, certain lighthearted
            scenes in the books are downplayed or omitted, and the portrayal of
            battles or deaths is made more visually intense.
            <strong>
              <em>Visual Representations</em>
            </strong>
            : Certain magical elements, like the appearance of spells, the look
            of characters (e.g., Dobby and Kreacher), or the depiction of
            magical creatures, may differ in the movies due to visual
            interpretation choices.
          </li>
          <li>
            <strong>Other Minor Differences</strong>
            <p>
              <strong>
                <em>Fleur Delacour's Family</em>
              </strong>
              : The books introduce Fleur's sister Gabrielle and give more
              context about her family, which is not fully explored in the
              films.
            </p>
            <p>
              <strong>
                <em>The Triwizard Tournament Tasks</em>
              </strong>
              : The tasks in the "Goblet of Fire" are more elaborate and
              detailed in the book, whereas the movie condenses them for time.
            </p>
          </li>
        </ol>
      </div>
    </main>
  );
}

export default About;
