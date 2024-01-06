interface FieldProps {
  name: string;
  value: any;
  type: string | number;
  register: any; // Ajusta el tipo según la biblioteca que estés utilizando
  className: any;
  onChange: any;
  placeholder: string;
  rows?: number;
}

const Field = ({
  placeholder,
  name,
  type,
  value,
  onChange,
  register,
  className,
  rows,
}: FieldProps) => {
  if (type === "textarea") {
    return (
      <textarea
        autoComplete="off"
        value={value}
        {...register(name)}
        className={className}
        rows={rows}
        onChange={onChange}
      />
    );
  } else {
    return (
      <input
        autoComplete="off"
        type={type}
        value={value}
        placeholder={placeholder}
        {...register(name)}
        className={className}
        onChange={onChange}
      />
    );
  }
};

export default Field;
