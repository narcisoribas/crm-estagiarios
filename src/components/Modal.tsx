
interface ModalProps{
    open: boolean;
    title: string;
    onClose: () => void;
    children: React.ReactNode;
}



export function Modal(props: ModalProps){

    console.log("Modal render", props.open)

    return(
        <div className="modal-backdrop" onClick={props.onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{props.title}</h2>
                    <button onClick={props.onClose} aria-label="close">X</button>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </div>
    )}