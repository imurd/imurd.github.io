

type AlertProps = {
    type?: 'success' | 'error' | 'warning' | 'info';
    text: string;
};

export default function Alert({ type = 'info', text }:AlertProps){
    const baseClass = 'p-4 rounded-lg text-xl mb-4';
    const typeClasses = {
        success: 'bg-green-100 text-green-800',
        error: 'bg-red-100 text-red-800',
        warning: 'bg-yellow-100 text-yellow-800',
        info: 'bg-blue-100 text-blue-800',
    };
    return (
        <div className={`${baseClass} ${typeClasses[type]}`} role="alert">
            <p className="font-bold text-xl">{text}</p>
        </div>
    );
}