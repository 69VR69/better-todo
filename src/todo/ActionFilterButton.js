
let refresh = 0;
export default function ActionFilterButton ({ children, className, action }) {

    console.log('REFRESH ActionFilterButton ', children, refresh++);

    function handleClick(e) {
        e.preventDefault();
        console.log('Button ', children, 'clicked');
        action(e);
    }

    return (
        <a className={className} onClick={handleClick} href=".">{children}</a>
    );
}