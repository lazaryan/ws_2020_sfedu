declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (
      paths: string[],
      callback: (require: <T>(path: string) => T) => void
    ) => void;
};

interface Window { BASE_URL: any; }
