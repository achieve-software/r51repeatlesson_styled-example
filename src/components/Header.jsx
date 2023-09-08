import Button from "./styled/Button"
import Flex from "./styled/Flex"
import Image from "./styled/Image"

const Header = () => {
  return (
    <Flex>
      <div>
        <h1>Besi Sistemleri... En sağlam malzemelerden en uygun fiyatlı ürünler</h1>
        <p>
        Açık besi naylon çatılar, hayvanların doğal ortamlarına daha yakın bir şekilde yetiştirilmelerini sağlar. Hayvanlar serbestçe dolaşabilir, güneş ışığından faydalanabilir ve doğal otlaklarda otlayabilir. Bu, hayvanların fiziksel ve zihinsel refahını artırır.
        </p>
        <Button bg="#AF3A53">Web Sitemiz için tıklayın!!!</Button>
      </div>

      <Image src="./images/hero.jpg" />
    </Flex>
  )
}

export default Header
