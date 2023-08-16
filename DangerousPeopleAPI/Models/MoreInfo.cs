namespace backend.Models
{
    public class MoreInfo
    {
        public MoreInfo() {
            IsCriminal = false;
        }

        public long Id { get; set; }
        public string CPF { get; set; }
        public string FullAddress { get; set; }
        public string Identity { get; set; }
        public bool IsCriminal { get; set; }

        public void UpdateMoreInfo(string cpf, string fulladdress, string identity, bool isCriminal) {
            CPF = cpf;
            FullAddress = fulladdress;
            Identity = identity;
            IsCriminal = isCriminal;
        }
    }
}