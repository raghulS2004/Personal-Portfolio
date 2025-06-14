
const Footer = () => {
    return (
        <footer className="bg-secondary py-6">
            <div className="container mx-auto text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Raghul S. All Rights Reserved.</p>
                <p className="text-sm mt-1">
                    Designed and built with passion.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
