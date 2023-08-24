namespace backend.Models
{
    public class Datas
    {
        public Datas() {
            IsMarried = false;
        }
        public long Id { get; set; }
        public string NomeCompleto { get; set; }
        public bool IsMarried { get; set; }

        public void UpdateData(string nomeCompleto, bool isMarried) {
            NomeCompleto = nomeCompleto;
            IsMarried = isMarried;
        }
    }
}