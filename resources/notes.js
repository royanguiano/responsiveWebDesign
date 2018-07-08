/**

3 pillers of html and css
    1. responsive design
        - fluid layouts
        - media queries
        - responsive images
        - correct units
        - desktop first vs. mobile first

    2. maintanable and scalable code
        - clean
        - easy to understand code
        - growth
        - reusable code (components, modules)
        - how to organize files
        - naming convention
        - html structure

    3. web performance
        - less http request
        - less code
        - compress code
        - use a CSS processor
        - less images
        - compress images

    process of rendering a website
        load html files -> parse each file                                                      -> create DOM Tree -> render tree
                        -> load css files  -> cascade process (resolve conflicting decleration) -> css object model
                                           -> process css final values 
        parse css steps
            1. cascade process (resolve conflicting decleration)
                process to check
                    importance (weight)     ->      specificy priorities              ->     source order
                     - important! keyword           - inline
                     - author decleration           - ids
                     - user                         - classes (sudo classes), attributes
                     - browser                      - elements 


            3 types of declearations
                1. users
                2. css files
                3. browsers 

            2. process css final values (px)
                1. declared values
                2. cascaded value (based on specificity) (inline, id, class, element)
                3. specified value 
                4. computed value (values get converted to pxs)
                5. used value (final calculated value based on layout values (parents))
                6. actual value ()

        How are values converted from relative (em, rem, %, vh, vw) to px
            percentage (%)
                1. font % 
                    calculate: (x))% * parents % = result(px)
                2. distance %   (x))% width * parents % width = result width (px)

                em vs. rem unit value (rem units are browser > 9)
                    - (font) em -> use parent values as reference (x)em * (parents)px
                    - (length) em -> uses current element for reference 
                    - rem uses root values as reference for length and font size

                vh & vw
                    1vh = 1% viewport height
                    1vw = 1% viewport width

        Inheritance

        website rendering phase (visual rendering )
            1. visual formatting model 
                - dimensions of boxes
                - box type: inline, block, inline-block
                - positioning: float, or positioning
                - stacking context
                - parent/child/neightbors  elements
                - external information: viewport size, dimensions of images, ect

            box model
                - content (text, images, ect)
                - width 
                - height
                - padding: transparent area around content inside box
                - border: goes around padding and content 
                - margin: space between boxes (outter part)
                - fill area: area where background-color or background-image get used (inside border )

                * calculate total width = right border width + 
                                          right padding + 
                                          content width + 
                                          left padding + 
                                          left border width

                * total height = top border width + 
                                 top padding + 
                                 content height + 
                                 bottom padding + 
                                 bottom border height
                
                * tricks on box layouts
                    - box-sizing: border-box; 
                        * Total width = border width + padding width + content width
                        * Total height = border height + padding height + content height
            
            box types
                1. block-level box 
                    - width = parents 100% width
                    - vertically aligned

                2. inline box
                    - width & height is only its content space
                    - no line breaks = no vertical align 
                    - margin can only be applied to left and right 
                
                3. inline block box (combination of block-level box & inline box)
                    - width & height is only its content space
                    - no line breaks = no vertical align 
                    - box-model applies


            positioning 
                1. normal flow
                    - render based on their order
                    - no float or positining css
                    - default position: relative
                    
                2. float
                    - float: left or right
                    - container does not adject its height to content

                3. absolute positioning 
                    - no impact on surrounding content/elements 
                    - it can overlap other elements
                    - use: top, bottom, left, right to position element from its surrouding position

            stacking context (layers like a stack FIFO)
                - z index

            Mindset
            think
                - component driven design
                    * divide page into modules
                    * create an interview of modules
                    * modules need to be reusable accorss projects 
                    * modules need to be independent 
            build
                - naming convention
                    * BEM: block element modifier
                        . block {} = standalone component that is meaningful on its own example: button, block
                        . block__element {} = an element that has not meaning of its own. 
                        . block__element__modifier {} = a different version of block or element (make unique)
                        
                        - example: .block {} 
                                   . block__element {}
                                   . block__element__modifier {}
            architech
                - 7-1 pattern
                    7 folders for partial sass files
                    1 sass file to importal all sass files 
                    example: 
                        base folder/ basic css defination
                        components/  1 file for each component 
                        layout/      define layout of project
                        pages/       styles for different pages of project
                        themes/      for different visual themes of project
                        abstract/    code that does not output any css ex. variables or mixins
                        vendors/     3rd party css goes here

            DRY
            dont repeat your code 
                css mixins example: 
                    @mixin name (para){
                        margin: 35px; 
                        padding: para * 1px; 
                        background-color: white; 
                    }

                    p{
                        @mixin name(9);
                    }
                css function example: 
                    @function divide($a, $b) {
                        return $a / $b;
                    }

                    p{
                        width: divide(10, 39) * 1px;
                    }
                
                css extends 
                %btn-placeholder{
                    width: 30px; 
                    height: 20px; 
                    padding 10px; 
                    display: inline-block; 
                }

                .btn-main{
                    &:link{
                        @extends %btn-placeholder;
                    }
                }

            command line commands
            ls - view directory
            cp name directory = copy name to directory
            .. = above current location
            mv file directory = move file to directory
            rm = remove file completely
            rm ~r = remove directory completely
            
            type of layouts
                1. float layout
                2. flexbox layout
                3. css grid layout

            components:
                - utilities classes
                - background-clip property
                - transform multiple properties simultaneously
                - outline-offset together with outline
                - style elements while not hover

            html resources: 
                - symbols/signs
                    https://css-tricks.com/snippets/html/glyphs/
                - icons
                    http://linea.io/
                    

            




 */