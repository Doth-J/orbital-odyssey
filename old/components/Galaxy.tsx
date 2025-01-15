export default function Galaxy({ isOpen }: { isOpen: boolean }) {
  return (
    <ol className={`solar_system ${isOpen ? "on" : "off"}`}>
      <li
        id="sun"
        className="modal-trigger"
        data-target="info-modal"
        data-title="The Sun"
        data-description="The Sun is the star at the center of the Solar System. It is a massive, nearly perfect sphere of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy from its surface mainly as visible light and infrared radiation"
        data-coordinates="[0°,0°]"
      ></li>
      <li
        id="mercury"
        className="modal-trigger"
        data-target="info-modal"
        data-title="Mercury"
        data-description="Mercury is the smallest planet in the Solar System and the closest to the Sun. Mercury is classified as a terrestrial planet, with roughly the same surface gravity as Mars. The surface of Mercury is heavily cratered, as a result of countless impact events that have accumulated over billions of years."
        data-coordinates="[15.25°,30.19°]"
      ></li>
      <li
        id="venus"
        className="modal-trigger"
        data-target="info-modal"
        data-title="Venus"
        data-description="Venus is the second planet from the Sun. It is a terrestrial planet and is the closest in mass and size to its orbital neighbour Earth. Venus has by far the densest atmosphere of the terrestrial planets, composed mostly of carbon dioxide with a thick, global sulfuric acid cloud cover."
        data-coordinates="[30.5°,39.07°]"
      ></li>
      <li
        id="earth"
        className="modal-trigger"
        data-target="info-modal"
        data-title="Earth"
        data-description="Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere"
        data-coordinates="[42°,42°]"
      ></li>
      <li
        id="mars"
        className="modal-trigger"
        data-target="info-modal"
        data-title="Mars"
        data-description="Mars, also known as the Red Planet, is the fourth planet from the Sun and has the tallest volcano in the Solar System. It is classified as a terrestrial planet and is the second smallest of the Solar System's planets with a diameter of 6,779 km (4,212 mi). In terms of orbital motion, a Martian solar day (sol) is equal to 24.6 hours, and a Martian solar year is equal to 1.88 Earth years (687 Earth days)"
        data-coordinates="[62°,50.19°]"
      ></li>
      <li
        id="jupiter"
        className="modal-trigger"
        data-target="info-modal"
        data-title="Jupiter"
        data-description="Jupiter is the largest planet in the Solar System and is known for its Great Red Spot, a giant storm. It is a gas giant with a mass more than 2.5 times that of all the other planets in the Solar System combined and slightly less than one-thousandth the mass of the Sun. Its diameter is eleven times that of Earth, and a tenth that of the Sun"
        data-coordinates="[75.14°,67.76°]"
      ></li>
      <li
        id="saturn"
        className="modal-trigger"
        data-target="info-modal"
        data-title="Saturn"
        data-description="Saturn is the sixth planet from the Sun and is famous for its extensive ring system. It is a gas giant, with an average radius of about nine times that of Earth. It has an eighth the average density of Earth, but is over 95 times more massive. Even though Saturn is almost as big as Jupiter, Saturn has less than a third its mass. Saturn orbits the Sun at a distance of 9.59 AU (1,434 million km), with an orbital period of 29.45 years."
        data-coordinates="[100.25°,80.65°]"
      ></li>
      <li
        id="uranus"
        className="modal-trigger"
        data-target="info-modal"
        data-title="Uranus"
        data-description="Uranus is the seventh planet from the Sun and rotates on its side, making it unique in the Solar System. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which astronomy calls 'ice' or volatiles. The planet's atmosphere has a complex layered cloud structure and has the lowest minimum temperature (49 K (-224 °C; -371 °F)) of all the Solar System's planets."
        data-coordinates="[120.87°,92.37°]"
      ></li>
      <li
        id="neptune"
        className="modal-trigger"
        data-target="info-modal"
        data-title="Neptune"
        data-description="Neptune is the eighth planet from the Sun and is known for its deep blue color and strong winds. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth. Compared to its fellow ice giant Uranus, Neptune is slightly more massive, but denser and smaller."
        data-coordinates="[150.65°,100.97°]"
      ></li>
    </ol>
  );
}
