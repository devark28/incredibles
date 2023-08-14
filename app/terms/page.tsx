import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-full p-6 relative">
      <div className="flex flex-col min-w-full">
        <Header page={3}/>
        <div className="flex flex-1 min-h-fit">
          <div className="flex flex-1 flex-col items-center justify-center inc-terms-paper">
            <span style={{fontSize: "1.5rem", marginBottom: "1rem", fontWeight: "bold", whiteSpace: "pre"}}>Terms</span>
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod eros nunc, sit amet iaculis erat ultrices at. Proin viverra nulla velit, id convallis diam interdum sit amet. Phasellus a laoreet eros. Fusce sagittis dolor est. Quisque semper mauris vitae quam efficitur imperdiet in id enim. Maecenas consectetur sollicitudin lacus eu porta. Maecenas vel risus et tortor pulvinar posuere. Ut sit amet sollicitudin nisi, eu faucibus lacus. Morbi commodo aliquam felis, sed ullamcorper mi tempor eget. Ut dapibus nisi velit. Nam rutrum sit amet libero in ullamcorper. Nam et eleifend orci, a lobortis arcu. Suspendisse eget odio semper, bibendum ex sed, imperdiet diam. Nulla vitae purus metus. Vivamus dolor lorem, suscipit vel nibh sit amet, blandit ultricies eros.

                Nunc nec nisi in eros tristique ornare. Maecenas nec sagittis metus. Etiam hendrerit neque vitae erat rhoncus ultricies. Nulla tristique leo felis, id consequat ex porta eget. Curabitur tincidunt elit et sem accumsan fermentum. Phasellus iaculis sem sit amet augue congue, in faucibus arcu ullamcorper. Fusce id laoreet augue. Nam rutrum mollis neque eget rhoncus. Nullam faucibus vulputate diam, ac sagittis dui volutpat sed. Pellentesque eget sapien risus.

                Mauris dapibus aliquam risus, vel dictum sapien condimentum ut. Fusce ac nulla enim. Aenean varius auctor velit, id porttitor urna vehicula vel. Phasellus vel dolor ante. Nulla sollicitudin, felis at auctor rutrum, neque augue tincidunt odio, eget efficitur nibh arcu eget risus. Mauris pulvinar arcu eget arcu vehicula, eu rhoncus magna viverra. Pellentesque est libero, tincidunt quis sapien et, iaculis dapibus dolor.

                Donec dictum, nisi vel varius laoreet, tellus quam volutpat nisl, vel fermentum orci sem a tortor. Phasellus non ligula a lorem ultricies egestas in porta mauris. Donec cursus sapien nec feugiat dapibus. Quisque ullamcorper nulla et leo mollis, quis fringilla justo pellentesque. Nam dapibus vel elit sed faucibus. Integer laoreet dictum dolor, in egestas enim. Nulla volutpat metus lectus, in volutpat dolor posuere non. Vivamus in nibh nec mauris interdum gravida ac quis metus. Praesent nibh arcu, efficitur ac lacus quis, rutrum porta eros. Pellentesque ultrices nunc vitae neque fringilla, eget fringilla felis mattis. Duis vel mi ipsum. Phasellus tincidunt, ligula ac faucibus lobortis, mauris tortor lobortis ipsum, sed lobortis erat nibh sagittis nulla. Duis vel nulla mauris. Pellentesque euismod venenatis orci a mattis.

                Morbi fermentum dui nec elit congue, et fermentum ex rhoncus. Maecenas commodo dolor quis mauris sollicitudin imperdiet. Maecenas ornare imperdiet ante, id maximus ex hendrerit sed. Aenean posuere tempus lacus, condimentum consequat odio tempus at. Vestibulum ac risus luctus, ornare nisl vitae, tincidunt augue. In venenatis diam metus, ut euismod sapien volutpat nec. Donec nec nulla tortor.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod eros nunc, sit amet iaculis erat ultrices at. Proin viverra nulla velit, id convallis diam interdum sit amet. Phasellus a laoreet eros. Fusce sagittis dolor est. Quisque semper mauris vitae quam efficitur imperdiet in id enim. Maecenas consectetur sollicitudin lacus eu porta. Maecenas vel risus et tortor pulvinar posuere. Ut sit amet sollicitudin nisi, eu faucibus lacus. Morbi commodo aliquam felis, sed ullamcorper mi tempor eget. Ut dapibus nisi velit. Nam rutrum sit amet libero in ullamcorper. Nam et eleifend orci, a lobortis arcu. Suspendisse eget odio semper, bibendum ex sed, imperdiet diam. Nulla vitae purus metus. Vivamus dolor lorem, suscipit vel nibh sit amet, blandit ultricies eros.

                Nunc nec nisi in eros tristique ornare. Maecenas nec sagittis metus. Etiam hendrerit neque vitae erat rhoncus ultricies. Nulla tristique leo felis, id consequat ex porta eget. Curabitur tincidunt elit et sem accumsan fermentum. Phasellus iaculis sem sit amet augue congue, in faucibus arcu ullamcorper. Fusce id laoreet augue. Nam rutrum mollis neque eget rhoncus. Nullam faucibus vulputate diam, ac sagittis dui volutpat sed. Pellentesque eget sapien risus.

                Mauris dapibus aliquam risus, vel dictum sapien condimentum ut. Fusce ac nulla enim. Aenean varius auctor velit, id porttitor urna vehicula vel. Phasellus vel dolor ante. Nulla sollicitudin, felis at auctor rutrum, neque augue tincidunt odio, eget efficitur nibh arcu eget risus. Mauris pulvinar arcu eget arcu vehicula, eu rhoncus magna viverra. Pellentesque est libero, tincidunt quis sapien et, iaculis dapibus dolor.

                Donec dictum, nisi vel varius laoreet, tellus quam volutpat nisl, vel fermentum orci sem a tortor. Phasellus non ligula a lorem ultricies egestas in porta mauris. Donec cursus sapien nec feugiat dapibus. Quisque ullamcorper nulla et leo mollis, quis fringilla justo pellentesque. Nam dapibus vel elit sed faucibus. Integer laoreet dictum dolor, in egestas enim. Nulla volutpat metus lectus, in volutpat dolor posuere non. Vivamus in nibh nec mauris interdum gravida ac quis metus. Praesent nibh arcu, efficitur ac lacus quis, rutrum porta eros. Pellentesque ultrices nunc vitae neque fringilla, eget fringilla felis mattis. Duis vel mi ipsum. Phasellus tincidunt, ligula ac faucibus lobortis, mauris tortor lobortis ipsum, sed lobortis erat nibh sagittis nulla. Duis vel nulla mauris. Pellentesque euismod venenatis orci a mattis.

                Morbi fermentum dui nec elit congue, et fermentum ex rhoncus. Maecenas commodo dolor quis mauris sollicitudin imperdiet. Maecenas ornare imperdiet ante, id maximus ex hendrerit sed. Aenean posuere tempus lacus, condimentum consequat odio tempus at. Vestibulum ac risus luctus, ornare nisl vitae, tincidunt augue. In venenatis diam metus, ut euismod sapien volutpat nec. Donec nec nulla tortor.
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  )
}
