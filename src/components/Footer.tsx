
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container text-center text-muted-foreground">
        <p className="text-base font-semibold">&copy; {new Date().getFullYear()} Raghul S. All Rights Reserved.</p>
        <p className="text-sm mt-2">
          Designed and built with passion.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
